import { Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import BrandDashboardPage from './pages/BrandDashboardPage'
import CreatorDashboardPage from './pages/CreatorDashboardPage'
import DealScopePage from './pages/DealScopePage'
import DealCounterpartyPage from './pages/DealCounterpartyPage'
import DealEscrowPage from './pages/DealEscrowPage'
import DealTermsPage from './pages/DealTermsPage'
import WorkspaceEmptyPage from './components/WorkspaceEmptyPage'

const unavailableRoutes = [
  ['/verify-email', 'Email verification'], ['/complete-profile', 'Complete your profile'],
  ['/deals/uk-5028/locked', 'Deal funding'], ['/deals/uk-5028', 'Deal details'],
  ['/deals/uk-5028/review', 'Review deal'], ['/deals/uk-5028/top-up-settled', 'Funding update'],
  ['/deals/uk-5028/revision', 'Revision request'], ['/creator/uk-5028/resubmit', 'Resubmit work'],
  ['/deals/uk-5028/milestone-2', 'Milestone'], ['/creator/uk-5028/spark-ads', 'Campaign permissions'],
  ['/deals/uk-5028/launched', 'Campaign'], ['/deals/uk-5028/release', 'Release payment'],
  ['/deals/uk-5028/settled', 'Settlement'], ['/deals/uk-5028/audit', 'Performance'],
  ['/deals/uk-5028/closed', 'Closed deal'], ['/creator/uk-5028/archive', 'Deal archive'],
  ['/creator/uk-5028/receipt', 'Payout receipt'], ['/deals/uk-5028/tax-export', 'Tax export'],
  ['/settings/sync', 'Accounting connections'], ['/creator/uk-5028/sign', 'Review agreement'],
  ['/invitations/uk-5028', 'Invitation'], ['/deals/invite', 'Invite a creator'],
  ['/creator/uk-5028/revise', 'Propose a revision'], ['/legal', 'Legal'], ['/welcome', 'Welcome'],
  ['/m/revision', 'Revision request'], ['/m/revision/milestone-1', 'Milestone revision'],
  ['/m/receipt', 'Receipt'], ['/m/deals/uk-5028', 'Deal details'],
] as const

export function CollabioRoutes() {
  return <>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/deals" element={<BrandDashboardPage />} />
    <Route path="/creator" element={<CreatorDashboardPage />} />
    <Route path="/deals/new" element={<DealScopePage />} />
    <Route path="/deals/new/counterparty" element={<DealCounterpartyPage />} />
    <Route path="/deals/new/escrow" element={<DealEscrowPage />} />
    <Route path="/deals/new/terms" element={<DealTermsPage />} />
    {unavailableRoutes.map(([path, title]) => <Route key={path} path={path} element={<WorkspaceEmptyPage eyebrow="Collabio" title={title} description="This page will be available when its data and workflow are connected." sections={[{ title: 'Nothing to show yet', description: 'There is no connected information for this page.' }]} action={{ label: 'Back to deals', to: '/deals' }} />} />)}
  </>
}
