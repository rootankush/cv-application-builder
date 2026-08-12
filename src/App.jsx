import MainViewer from "./components/Main/main-viewer";
import InputSidebar from "./components/SideBar/inputSidebar";

export default function App() {
  return (
    <div className="main-container">
      <InputSidebar></InputSidebar>
      <MainViewer></MainViewer>
    </div>
  );
}
