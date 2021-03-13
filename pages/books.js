import axios from 'axios';
import {Card, Image, Icon} from 'semantic-ui-react';
import styles from '../styles/book.module.css';

export default function books({items}){
    return(
        <div className={styles.bookContainer}>
          {items.map(item=>(
              <div key={item.isbn} className={styles.abook}>
              <Card centered>
                 <Image 
                 src={item.image.substr(0,item.image.indexOf("?type"))}/>
                 <Card.Content>
                     <Card.Header style={{fontSize:14}}>{item.title}</Card.Header>
                     <Card.Meta>
                        <span><a href={item.link}>구매 링크</a></span>
                     </Card.Meta>
                     <Card.Description style={{fontSize:8}}>
                         {item.description}
                     </Card.Description>
                 </Card.Content>
                 <Card.Content extra>
                     <a>
                         <Icon name='dollar sign' />
                         정가:{item.price}원 / 할인가:{item.discount}원
                     </a>
                 </Card.Content>
              </Card>
              </div>
          ))}
        </div>
    );
}

export async function getStaticProps(){
    const ID_KEY='tq3Jki2DtzIL1_kXhvq3';
    const SECRET_KEY='eIasCydQys';
    const query='민음사';  
    const apiUrl=`https://openapi.naver.com/v1/search/book.json`;

    const items = await axios.get(apiUrl,{
        params:{
            query:query,
            display:30
        },
        headers:{
            'X-Naver-Client-Id': ID_KEY, 
            'X-Naver-Client-Secret': SECRET_KEY,
            'Access-Control-Allow-Origin': '*'
        }
    });
    return {
        props:{
           items:items.data.items
        }
    };
}
