import {row, col, css} from './utils'

function title(block) {
    const {tag = 'h1', styles} = block.options
    // const tag = block.options.tag ?? 'h1'
    // const styles = block.options.styles ?? ''
    return row(col(` <${tag}>${block.value}</${tag}>`), css(styles))
}

function text(block) {
    return row(col(` <p>${block.value}</p>`))
}

function columns(block) {

    // const html = block.value.map(item =>  `<div class="col-sm">${item}</div>`)
    // const html = block.value.map(item =>  col(item)) функция как референс
    const html = block.value.map(col)
    return row(html.join(''))
}

function image(block) {
    const {imageStyles, alt = '', styles} = block.options

    // return row(`<img src="${block.value}" />`, css(block.options.styles))
    return row(`<img src="${block.value}" alt="${alt}" style="${css(imageStyles)}" />`, css(styles))
}

export const templates = {
    title,
    text,
    image,
    columns
}