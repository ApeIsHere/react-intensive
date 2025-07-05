import MainLayout from "../shared/layouts/MainLayout";
import LayoutFooter from "../widgets/LayoutFooter/LayoutFooter";
import LayoutHeader from "../widgets/LayoutHeader/LayoutHeader";
import PostList from "../widgets/PostList/PostList";

function App() {
  return (
    <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
      <PostList />
    </MainLayout>
  );
}

export default App;
