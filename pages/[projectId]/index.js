export default function Project(props) {
    return (
        <div>
            {props.projectData}
            {/* <h1>{props.arr1}</h1> */}
        </div>
        
    )
};


export async function getStaticPaths () {
    const arr1 = Array.from({length: 5}, (_, i) => i + 1);
    const arr11 = arr1.map(ele => '1-' + ele.toString());
    // const arr2 = Array.from({length: 3}, (_, i) => i + 1);
    // const arr22 = arr2.map(ele => '2-' + ele.toString());
    // const arr = arr11.concat(arr22);
    return {
        fallback: false,  // true: immediately return an empty page
        // fallback: false,  // if user enter an url not included > return 404
        paths: arr11.map(ele => ({
            params: {
                projectId: ele.toString(),
            }
        }))
    }
};


export async function getStaticProps (context) {
    const projectId = context.params.projectId; 
    return {
        props: {
            projectData: projectId,
        }
    }
};