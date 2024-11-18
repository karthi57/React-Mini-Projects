import { getAllPost } from "./API";
import { useEffect, useState } from "react";



export default function App() {
	const [postData, setPostData] = useState();
	const [page, setpage] = useState(10);

	function handleClick(){
		setpage(()=> page+10);
	}

	useEffect(() => {
		getAllPost(page).then(post => setPostData(post) )
	}, [page])

	console.log(postData, page);
	return (
		<>
			<table>
				<thead style={{width:"100%"}}>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Body</th>
					</tr>
				</thead>
				<tbody>
				{ postData && postData.map((post, index) => (
						<tr key={index}>
							<td>{post.id}</td>
							<td>{post.title}</td>
							<td>{post.body}</td>
						</tr>
					))
				}
				</tbody>
				
			 </table>
				
			
			<button id="next" className="rounded border-2 bg-blue-400 hover:bg-blue-500 m-4 p-2 text-white"
			onClick={handleClick}
			>Next</button>
		</>
	);
}
