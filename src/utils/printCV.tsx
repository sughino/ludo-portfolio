export const triggerPrint = () => {
    const newWindow = window.open("/cv/Ludo-cv.pdf", "_blank")

    if (!newWindow) return

    newWindow.onload = () => {
    newWindow.focus()
    }
}