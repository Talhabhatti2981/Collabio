import { Route } from 'react-router-dom'
import ReviewScreen from './ReviewScreen'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import VerifyEmailPage from './pages/VerifyEmailPage'
import CompleteProfilePage from './pages/CompleteProfilePage'
import BrandDashboardPage from './pages/BrandDashboardPage'
import CreatorDashboardPage from './pages/CreatorDashboardPage'
import DealScopePage from './pages/DealScopePage'
import DealCounterpartyPage from './pages/DealCounterpartyPage'
import DealEscrowPage from './pages/DealEscrowPage'
import DealTermsPage from './pages/DealTermsPage'
import EscrowLockedPage from './pages/EscrowLockedPage'
import ActiveDealPage from './pages/ActiveDealPage'
import TopUpSettledPage from './pages/TopUpSettledPage'
import RevisionRequestPage from './pages/RevisionRequestPage'
import ResubmitDeliverablePage from './pages/ResubmitDeliverablePage'
import MilestoneTwoPage from './pages/MilestoneTwoPage'
import SparkAdsPage from './pages/SparkAdsPage'
import CampaignLaunchedPage from './pages/CampaignLaunchedPage'
import PayoutReleasePage from './pages/PayoutReleasePage'
import SettlementReceiptPage from './pages/SettlementReceiptPage'
import PerformanceAuditPage from './pages/PerformanceAuditPage'
import DealClosedPage from './pages/DealClosedPage'
import CreatorArchivePage from './pages/CreatorArchivePage'
import PayoutReceiptPage from './pages/PayoutReceiptPage'
import TaxExportPage from './pages/TaxExportPage'
import LedgerSyncPage from './pages/LedgerSyncPage'
import CountersignPage from './pages/CountersignPage'
import InvitationPage from './pages/InvitationPage'
import InviteCreatorPage from './pages/InviteCreatorPage'
import ProposeRevisionPage from './pages/ProposeRevisionPage'
import LegalPage from './pages/LegalPage'
import WelcomePage from './pages/WelcomePage'
import MobileRevisionPage from './pages/MobileRevisionPage'
import MobileRevisionMilestonePage from './pages/MobileRevisionMilestonePage'
import MobileReceiptPage from './pages/MobileReceiptPage'
import MobileActiveDealPage from './pages/MobileActiveDealPage'

export function PactlyRoutes() {
  return (
    <>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/complete-profile" element={<CompleteProfilePage />} />
      <Route path="/deals" element={<BrandDashboardPage />} />
      <Route path="/creator" element={<CreatorDashboardPage />} />
      <Route path="/deals/new" element={<DealScopePage />} />
      <Route path="/deals/new/counterparty" element={<DealCounterpartyPage />} />
      <Route path="/deals/new/escrow" element={<DealEscrowPage />} />
      <Route path="/deals/new/terms" element={<DealTermsPage />} />
      <Route path="/deals/uk-5028/locked" element={<EscrowLockedPage />} />
      <Route path="/deals/uk-5028" element={<ActiveDealPage />} />
      <Route path="/deals/uk-5028/review" element={<ReviewScreen />} />
      <Route path="/deals/uk-5028/top-up-settled" element={<TopUpSettledPage />} />
      <Route path="/deals/uk-5028/revision" element={<RevisionRequestPage />} />
      <Route path="/creator/uk-5028/resubmit" element={<ResubmitDeliverablePage />} />
      <Route path="/deals/uk-5028/milestone-2" element={<MilestoneTwoPage />} />
      <Route path="/creator/uk-5028/spark-ads" element={<SparkAdsPage />} />
      <Route path="/deals/uk-5028/launched" element={<CampaignLaunchedPage />} />
      <Route path="/deals/uk-5028/release" element={<PayoutReleasePage />} />
      <Route path="/deals/uk-5028/settled" element={<SettlementReceiptPage />} />
      <Route path="/deals/uk-5028/audit" element={<PerformanceAuditPage />} />
      <Route path="/deals/uk-5028/closed" element={<DealClosedPage />} />
      <Route path="/creator/uk-5028/archive" element={<CreatorArchivePage />} />
      <Route path="/creator/uk-5028/receipt" element={<PayoutReceiptPage />} />
      <Route path="/deals/uk-5028/tax-export" element={<TaxExportPage />} />
      <Route path="/settings/sync" element={<LedgerSyncPage />} />
      <Route path="/creator/uk-5028/sign" element={<CountersignPage />} />
      <Route path="/invitations/uk-5028" element={<InvitationPage />} />
      <Route path="/deals/invite" element={<InviteCreatorPage />} />
      <Route path="/creator/uk-5028/revise" element={<ProposeRevisionPage />} />
      <Route path="/legal" element={<LegalPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/m/revision" element={<MobileRevisionPage />} />
      <Route path="/m/revision/milestone-1" element={<MobileRevisionMilestonePage />} />
      <Route path="/m/receipt" element={<MobileReceiptPage />} />
      <Route path="/m/deals/uk-5028" element={<MobileActiveDealPage />} />
    </>
  )
}
