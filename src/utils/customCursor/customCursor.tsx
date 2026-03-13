import styles from './customCursor.module.css';

type CursorState = 'hover' | 'text' | 'arrowLeft' | 'arrowRight' | 'label' | 'default';

interface CursorAPI {
  setState: (type: CursorState, labelText?: string) => void;
  reset: () => void;
  destroy: () => void;
}

const CURSOR_STATES: Record<Exclude<CursorState, 'default'>, string> = {
  hover:  styles.hover,
  text:   styles.textActive,
  arrowLeft:  styles.arrowLeftActive,
  arrowRight:  styles.arrowRightActive,
  label:  styles.labelActive,
};

const buildMarkup = (): string => `
  <div class="${styles.cursor}">
    <div class="${styles.default}">
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <circle class="${styles.dot}" cx="8" cy="8" r="8"/>
      </svg>
    </div>
    <div class="${styles.text}">
      <svg width="4" height="20" viewBox="0 0 4 20" xmlns="http://www.w3.org/2000/svg">
        <rect class="${styles.line}" x="0" y="0" width="2" height="20" rx="1"/>
      </svg>
    </div>
    <div class="${styles.arrow}" aria-hidden="true">
      <svg width="40" height="80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.53 340.5">
        <path class="${styles.arrowPath}" d="M170.25,319.22L21.28,170.25,170.25,21.28" />
      </svg>
    </div>
    <div class="${styles.label}" aria-hidden="true"></div>
  </div>`;

export function CustomCursor(): CursorAPI {
  document.body.insertAdjacentHTML('beforeend', buildMarkup());
  document.body.classList.add('customCursorActive');

  const el    = document.body.lastElementChild as HTMLDivElement;
  const label = el.querySelector<HTMLDivElement>(`.${styles.label}`) as HTMLDivElement;

  let mx = -300, my = -300;
  let cx = -300, cy = -300;
  let rafId: number;

  const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
  const SPEED = 0.13;

  function tick(): void {
    cx = lerp(cx, mx, SPEED);
    cy = lerp(cy, my, SPEED);
    el.style.left = `${cx}px`;
    el.style.top  = `${cy}px`;
    rafId = requestAnimationFrame(tick);
  }
  rafId = requestAnimationFrame(tick);

  const onMouseMove  = (e: MouseEvent): void => { mx = e.clientX; my = e.clientY; };
  const onMouseDown  = (): void => el.classList.add(styles.clicking);
  const onMouseUp    = (): void => el.classList.remove(styles.clicking);
  const onMouseLeave = (): void => { el.style.opacity = '0'; };
  const onMouseEnter = (): void => { el.style.opacity = '1'; };

  document.addEventListener('mousemove',  onMouseMove);
  document.addEventListener('mousedown',  onMouseDown);
  document.addEventListener('mouseup',    onMouseUp);
  document.addEventListener('mouseleave', onMouseLeave);
  document.addEventListener('mouseenter', onMouseEnter);

  function clearStates(): void {
    el.classList.remove(...Object.values(CURSOR_STATES));
  }

  function applyState(type: CursorState, labelText?: string): void {
    clearStates();
    if (type === 'default') return;
    el.classList.add(CURSOR_STATES[type]);
    if (type === 'label') {
      label.textContent = labelText ?? '';
    }
  }//TODO quando fai hover sulle immagini di lifestyle mo stra l'immagine come cursore


  const onMouseOver = (e: MouseEvent): void => {
    const target = (e.target as Element).closest<HTMLElement>('[data-cursor]');
    if (!target) { clearStates(); return; }
    const cursorType = target.dataset.cursor as CursorState | undefined;
    if (!cursorType) return;
    applyState(cursorType, target.dataset.label);
  };
 
  const onMouseOut = (e: MouseEvent): void => {
    const leaving  = (e.target as Element).closest('[data-cursor]');
    const entering = (e.relatedTarget as Element | null)?.closest('[data-cursor]');
    if (leaving && !entering) clearStates();
  };
 
  document.addEventListener('mouseover', onMouseOver);
  document.addEventListener('mouseout',  onMouseOut);
 

  const onMouseOverBlend = (e: MouseEvent): void => {
    const inBlend = !!(e.target as Element).closest('[data-cursor-blend]');
    el.classList.toggle(styles.blend, inBlend);
  };
 
  const onMouseOutBlend = (e: MouseEvent): void => {
    const leaving  = (e.target as Element).closest('[data-cursor-blend]');
    const entering = (e.relatedTarget as Element | null)?.closest('[data-cursor-blend]');
    if (leaving && !entering) el.classList.remove(styles.blend);
  };
 
  document.addEventListener('mouseover', onMouseOverBlend);
  document.addEventListener('mouseout',  onMouseOutBlend);

  return {
    setState: applyState,
    reset: clearStates,
    destroy(): void {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove',  onMouseMove);
      document.removeEventListener('mousedown',  onMouseDown);
      document.removeEventListener('mouseup',    onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover',  onMouseOver);
      document.removeEventListener('mouseout',   onMouseOut);
      el.remove();
      document.body.classList.remove('customCursorActive');
    },
  };
}