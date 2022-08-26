import { library } from '@fortawesome/fontawesome-svg-core'
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag'
import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain'
import { faTags } from '@fortawesome/free-solid-svg-icons/faTags'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faBed } from '@fortawesome/free-solid-svg-icons/faBed'
import { faBedPulse } from '@fortawesome/free-solid-svg-icons/faBedPulse'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons/faHeartPulse'
import { faBattery } from '@fortawesome/free-solid-svg-icons/faBattery'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook'
import { faBox } from '@fortawesome/free-solid-svg-icons/faBox'
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons/faBoxArchive'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase'
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons/faCaretUp'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faChartPie } from '@fortawesome/free-solid-svg-icons/faChartPie'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'

const registerIcons = () => {
    library.add(
        faTag,
        faBrain,
        faTags,
        faChevronRight,
        faChevronLeft,
        faChevronUp,
        faChevronDown,
        faBed,
        faBedPulse,
        faHeartPulse,
        faBattery,
        faBell,
        faBook,
        faBriefcase,
        faBoxArchive,
        faBox,
        faCalendar,
        faCaretUp,
        faCaretDown,
        faCheck,
        faChartPie,
        faCircle,
        faCircleCheck,
        faLock,
        faUser,
        faEye,
        faEyeSlash
    )
}

export default registerIcons
