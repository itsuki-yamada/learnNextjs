import { ReactNode, VFC } from "react";
import { MainLayout } from "../../ui/layout/MainLayout";

const pageName = 'HOME';
type Props = {
  children: ReactNode
}
export const TopPageLayout: VFC<Props> = ({ children }) => {
  return (
    <MainLayout pageName={pageName}>
      {children}
    </MainLayout>
  )
}