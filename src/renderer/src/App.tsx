import { Content, RootLayout, Sidebar } from '@/components'

const App = () => {
  return (
    <RootLayout>
      <Sidebar className="p-2 ">Sidebar</Sidebar>
      <Content className="">Content</Content>
    </RootLayout>
  )
}
export default App
