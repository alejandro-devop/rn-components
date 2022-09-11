import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default {
    // The file which will be taken by rollup
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            strict: true
        }
    ],
    plugins: [typescript({ objectHashIgnoreUnknownHack: true })],
    external: [
        'react',
        'react-dom',
        'react-native',
        '@alejandro.dev/rn-themizer',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons/faTag',
        '@fortawesome/free-solid-svg-icons/faTags',
        '@fortawesome/free-solid-svg-icons/faBrain',
        '@fortawesome/react-native-fontawesome',
        '@fortawesome/free-solid-svg-icons/faChevronRight',
        '@fortawesome/free-solid-svg-icons/faChevronLeft',
        '@fortawesome/free-solid-svg-icons/faChevronUp',
        '@fortawesome/free-solid-svg-icons/faChevronDown',
        '@fortawesome/free-solid-svg-icons/faBed',
        '@fortawesome/free-solid-svg-icons/faBedPulse',
        '@fortawesome/free-solid-svg-icons/faHeartPulse',
        '@fortawesome/free-solid-svg-icons/faBattery',
        '@fortawesome/free-solid-svg-icons/faBell',
        '@fortawesome/free-solid-svg-icons/faBook',
        '@fortawesome/free-solid-svg-icons/faBox',
        '@fortawesome/free-solid-svg-icons/faBoxArchive',
        '@fortawesome/free-solid-svg-icons/faBriefcase',
        '@fortawesome/free-solid-svg-icons/faCalendar',
        '@fortawesome/free-solid-svg-icons/faCaretUp',
        '@fortawesome/free-solid-svg-icons/faCaretDown',
        '@fortawesome/free-solid-svg-icons/faCheck',
        '@fortawesome/free-solid-svg-icons/faChartPie',
        '@fortawesome/free-solid-svg-icons/faCircle',
        '@fortawesome/free-solid-svg-icons/faCircleCheck',
        '@fortawesome/free-regular-svg-icons/faCircle',
        '@fortawesome/free-solid-svg-icons/faLock',
        '@fortawesome/free-solid-svg-icons/faUser',
        '@fortawesome/free-solid-svg-icons/faEye',
        '@fortawesome/free-solid-svg-icons/faEyeSlash',
        '@fortawesome/free-solid-svg-icons/faEllipsisVertical',
        '@fortawesome/free-solid-svg-icons/faSearch',
        '@fortawesome/free-solid-svg-icons/faGlassWater',
        '@fortawesome/free-solid-svg-icons/faClock',
        '@fortawesome/free-solid-svg-icons/faPlay'
    ]
}
