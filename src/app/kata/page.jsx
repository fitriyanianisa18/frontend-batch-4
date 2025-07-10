import {KataMutiara} from '@/components/greeting'

export default function KataPage() {
	const namaUser = "Anisa"
	return (
		<div>
			<KataMutiara nama={namaUser} asal={"Bandung"}/>
		</div>
	)
}

// export default function KataPage() {
//     return (
//         <div>test</div>
//     )
// }