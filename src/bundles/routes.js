import { createRouteBundle } from 'redux-bundler'
import StatusPage from '../status/LoadableStatusPage'
import FilesPage from '../files/LoadableFilesPage'
import StartExploringPage from '../explore/LoadableStartExploringPage'
import ExplorePage from '../explore/LoadableExplorePage'
import PeersPage from '../peers/LoadablePeersPage'
import SettingsPage from '../settings/LoadableSettingsPage'
import AnalyticsPage from '../settings/AnalyticsPage'
import WelcomePage from '../welcome/LoadableWelcomePage'
import BlankPage from '../blank/BlankPage'
import LoginPage from '../login/LoadableLoginPage'
import resetPage from '../login/ResetPassword'
import Login from '../components/login-service/Login'
// import signPage from '../login/SignUp'

export default createRouteBundle({
  '/explore': StartExploringPage,
  '/explore*': ExplorePage,
  '/files*': FilesPage,
  '/ipfs*': FilesPage,
  '/ipns*': FilesPage,
  '/pins*': FilesPage,
  '/peers': PeersPage,
  '/settings/analytics': AnalyticsPage,
  '/settings*': SettingsPage,
  '/welcome': WelcomePage,
  '/blank': BlankPage,
  '/status*': StatusPage,
  '/': StatusPage,
  '': StatusPage,
  '/reset': resetPage,
  '/login*': LoginPage,
  '/loogin*': Login
}, { routeInfoSelector: 'selectHash' })
