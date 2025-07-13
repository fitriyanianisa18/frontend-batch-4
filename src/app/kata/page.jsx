import {KataMutiara} from '@/components/greeting'
import {ButtonComponent} from '@/components/classComponent'

export default function KataPage() {
	const namaUser = "Anisa"
	return (
		<div>
			<KataMutiara nama={namaUser} asal={"Sumbawa"}/>
			<ButtonComponent nama={namaUser}/>
		</div>
	)
}