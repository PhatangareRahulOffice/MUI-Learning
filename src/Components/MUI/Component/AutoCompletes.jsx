import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';


// const Skill = {
//     id:number,
//     label:string
// }
const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
const skillOPtions = skills.map((skill, index)=> ({
    id:index + 1,
    label:skill
}))
function AutoCompletes() {
    const [value, setValue] = useState(String | null);
    // const [skillValue, setSkillValue] = (Skill | null);
    // console.log(skillValue)
    console.log({value})

    const handelChange = (e, newValue)=>{
        setValue(newValue)
    }
    // const handelChange2 = (e, newValue)=>{
    //     setSkillValue(newValue)
    // }
  return (
    <>
    <Stack spacing={2} width='250px'>
        <Autocomplete options={skills} renderInput={(params) =><TextField {...params} label='skills' />} value={value} onChange={handelChange} freeSolo />

        {/* <Autocomplete options={skillOPtions} renderInput={(params) =><TextField {...params} label='skills' />} value={skillValue} onChange={handelChange2}  /> */}

         </Stack>
    </>
  )
}

export default AutoCompletes