export default async function projects(){
    const res = await fetch('../../assets/projects.json');
    const json = await res.json();
    console.log(json);
}