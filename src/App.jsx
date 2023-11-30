import { Content } from "./layout/Content";
import { Screen } from "./layout/Screen";
import { Sidebar } from "./layout/Sidebar";

function App() {
	return (
		<Screen>
			<Sidebar />
			<Content />
		</Screen>
	);
}

export default App;
