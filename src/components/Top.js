import {useRouter} from 'next/router';
import Gnb from './Gnb';
import Image from 'next/image';

export default function Top(){
    const router=useRouter();
    return(
        <div style={{textAlign:"center",marginLeft:20,marginRight:20}}>
           <Image onClick={()=>{ router.push('/'); }}
          src='/images/forLogo.jpg' 
          alt='albert camus'
          width={400}
          height={200} />
           <Gnb />
        </div>
    );
}