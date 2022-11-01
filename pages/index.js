import { getDatabase} from "../lib/notion";

export default function Home(props) {
	console.log(props)
  return (
    <div >
      {props?.posts?.map(item => {
		return <div key={item.id}>{item.properties.title.title[0].plain_text}</div>
	  })}
    </div>
  )
}

export const getStaticProps = async () => {
	const database = await getDatabase();
  
	return {
	  props: {
		posts: database,
	  },
	  revalidate: 1,
	};
  };