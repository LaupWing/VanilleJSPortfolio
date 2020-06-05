export default function invertColor({ r, g, b }) {
    return `rgb(${255 - r},${255 - g},${255 - b})`;
}
