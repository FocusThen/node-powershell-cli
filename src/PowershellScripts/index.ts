import Echo from './Echo'
import GetServices from './GetServices'

import { QEcho, QGetServices } from '../questions'

export default [
  {
    name: 'Echo',
    script: Echo,
    question: QEcho,
  },
  {
    name: 'GetServices',
    script: GetServices,
    question: QGetServices,
  },
]
