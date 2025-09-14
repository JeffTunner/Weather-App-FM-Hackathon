import LeftContent from "./LeftContent.jsx";
import RightContent from "./RightContent.jsx";

function ContentContainer() {

    return (
        <main className="flex gap-8">
            <LeftContent />
            <RightContent />
        </main>
    );

}
export default ContentContainer;