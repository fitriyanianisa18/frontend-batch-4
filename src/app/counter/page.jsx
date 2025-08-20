import { ReduxProvider } from '@/redux/provider'
import Counter from '@/components/counterComponent'
import Counter2 from '@/components/counterComponent2'
import Divider from '@mui/material/Divider';


export default function CounterPage() {
	return (
		<>
			<ReduxProvider>
                <h1>Redux</h1>
				<Counter />
			</ReduxProvider>
			<Divider/>
            <h1>Zustand</h1>
			<Counter2/>
		</>
	)
}