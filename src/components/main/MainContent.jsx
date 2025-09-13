import SearchContainer from "./SearchContainer.jsx";
import ContentContainer from "./ContentContainer.jsx";

function MainContent() {
    return (
        <main className="px-28 py-16">
            <SearchContainer />
            <ContentContainer />
        </main>
    );
}
export default MainContent;