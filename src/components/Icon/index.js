import './style/index.scss'
import getClassString from './utils'

const Icon = {
  name: 'Icon',
  functional: true,
  render(h, context) {
    const { props, data } = context
    const { component: Component, viewBox } = props
    const iProps = {
      ...data,
      class: getClassString(context),
      staticClass: ''
    }
    const svgBaseProps = {
      width: '1em',
      height: '1em',
      fill: 'currentColor',
      'aria-hidden': 'true',
      focusable: 'false'
    }
    const innerSvgProps = {
      attrs: {
        ...svgBaseProps,
        viewBox
      }
    }
    if (!viewBox) {
      delete innerSvgProps.attrs.viewBox
    }
    return (
      <i {...iProps}>
        <Component {...innerSvgProps}></Component>
      </i>
    )
  }
}

Icon.install = Vue => {
  Vue.component(Icon.name, Icon)
}

export default Icon
