import {useState} from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';

function Checkboxes() {
    const [acceptTnC , setAcceptTnC] = useState(false);
    const [skill, setSkill] = useState([])
    console.log(skill)
    console.log(acceptTnC)
    const handleChange = (e) =>{
        const value = e.target.checked;
        setAcceptTnC(value)

    }
    const handleSkillChange = (e) =>{
        const index = skill.indexOf(e.target.value)
        if(index  === -1){
            setSkill([...skill, e.target.value])
        }else{
            setSkill(skill.filter((skill)=> skill !== e.target.value))
        }

    }
  return (
    <>
    <Box>
        <Box>
<FormControlLabel label='I accept terms and condition' control={<Checkbox  color='secondary' checked={acceptTnC}  onChange={handleChange} />}></FormControlLabel>
        </Box>
        <Box>
            <Checkbox  icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            checked={acceptTnC}
            onChange={handleChange}
              />
        </Box>

        <Box>
            <FormControl>
            <FormLabel> Skills</FormLabel>
              <FormGroup row>
              <FormControlLabel label='HTML' control={<Checkbox value='html' checked={skill.includes('html')} onChange={handleSkillChange} />}  />
                <FormControlLabel label='CSS' control={<Checkbox value='css' checked={skill.includes('css')} onChange={handleSkillChange} />}  />
                <FormControlLabel label='JavaScript' control={<Checkbox value='javascript' checked={skill.includes('javascript')} onChange={handleSkillChange} />}  />
              </FormGroup>

            </FormControl>
        </Box>
    </Box>
    </>
  )
}

export default Checkboxes