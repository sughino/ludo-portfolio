import styles from './customCursor.module.css';

type CursorState = 'hover' | 'text' | 'arrowLeft' | 'arrowRight' | 'label' | 'default' | 'image';

interface CursorAPI {
  setState: (type: CursorState, labelText?: string, imgEl?: HTMLImageElement | null) => void;
  reset: () => void;
  destroy: () => void;
}

const CURSOR_STATES: Record<Exclude<CursorState, 'default'>, string> = {
  hover: styles.hover,
  text: styles.textActive,
  arrowLeft: styles.arrowLeftActive,
  arrowRight: styles.arrowRightActive,
  label: styles.labelActive,
  image: styles.imageActive,
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
    <div class="${styles.arrowRight}" aria-hidden="true">
      <svg width="40" height="80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.53 340.5">
        <path class="${styles.arrowRightPath}" d="M170.25,319.22L21.28,170.25,170.25,21.28" />
      </svg>
    </div>
    <div class="${styles.arrowLeft}" aria-hidden="true">
      <svg width="40" height="80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.53 340.5">
        <path class="${styles.arrowLeftPath}" d="M170.25,319.22L21.28,170.25,170.25,21.28" />
      </svg>
    </div>
    <div class="${styles.label}" aria-hidden="true"></div>
  </div>
  <div class="${styles.cursorImageContainer}" aria-hidden="true">
    <img class="${styles.cursorImg}" src="" alt="" />
  </div>`;

export function CustomCursor(): CursorAPI {
  document.body.insertAdjacentHTML('beforeend', buildMarkup());
  document.body.classList.add('customCursorActive');
  
  const children = document.body.children;
  const el = children[children.length - 2] as HTMLDivElement;
  const imgContainer = children[children.length - 1] as HTMLDivElement;
  const label = el.querySelector(`.${styles.label}`)! as HTMLDivElement;
  const cursorImg = imgContainer.querySelector('img')!;

  imgContainer.style.willChange = 'transform';
  el.style.willChange = 'transform';

  const imageCache = new Map<string, string>();

  let mx = -300, my = -300;
  let cx = -300, cy = -300;
  let ix = -300, iy = -300;
  let rafId: number;

  const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
  function tick() {
    cx = lerp(cx, mx, 0.13);
    cy = lerp(cy, my, 0.13);
    el.style.left = `${cx}px`;
    el.style.top = `${cy}px`;

    ix = lerp(ix, mx, 0.08);
    iy = lerp(iy, my, 0.08);
    imgContainer.style.left = `${ix}px`;
    imgContainer.style.top  = `${iy}px`;

    rafId = requestAnimationFrame(tick);
  }
  rafId = requestAnimationFrame(tick);

  
  const onMouseMove = (e: MouseEvent): void => { mx = e.clientX; my = e.clientY; };
  const onMouseDown = (): void => el.classList.add(styles.clicking);
  const onMouseUp = (): void => el.classList.remove(styles.clicking);
  const onMouseLeave = (): void => { 
    el.classList.add(styles.hidden);
    imgContainer.classList.add(styles.hidden);
  };
  const onMouseEnter = (): void => { 
    el.classList.remove(styles.hidden);
    imgContainer.classList.remove(styles.hidden);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('mouseleave', onMouseLeave);
  document.addEventListener('mouseenter', onMouseEnter);


  function clearStates(): void {
    el.classList.remove(...Object.values(CURSOR_STATES));
    imgContainer.classList.remove(styles.visible);
  }

  function applyState(type: CursorState, labelText?: string, imgEl?: HTMLImageElement | null): void {
    clearStates();
    if (type === 'default') return;
    el.classList.add(CURSOR_STATES[type]);

    if (type === 'label') {
      label.textContent = labelText ?? '';
    }

    if (type === 'image') {
      const src = imgEl?.currentSrc || imgEl?.src;

      if (src) {
        cursorImg.src = src;
        imgContainer.classList.add(styles.visible);
        return;
      }

      if (labelText) {
        const cached = imageCache.get(labelText);

        if (!cached) {
          const img = new Image();
          img.src = labelText;
          imageCache.set(labelText, labelText);

          img.onload = () => {
            cursorImg.src = labelText;
            imgContainer.classList.add(styles.visible);
          };
        } else {
          cursorImg.src = cached;
          imgContainer.classList.add(styles.visible);
        }
      }
    }
    
  }

  const onMouseOver = (e: MouseEvent): void => {
    const target = (e.target as Element).closest<HTMLElement>('[data-cursor]');
    if (!target) { clearStates(); return; }

    const type = target.dataset.cursor as CursorState;
    const img = target.querySelector('img');

    applyState(type, target.dataset.label, img);
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
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mouseover', onMouseOverBlend);
      document.removeEventListener('mouseout', onMouseOutBlend);

      el.remove();
      imgContainer.remove();
      document.body.classList.remove('customCursorActive');
    },
  };
}