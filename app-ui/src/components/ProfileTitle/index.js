import { Divider, Typography } from "@material-ui/core"

const ProfileTitle = ({text, children})=>{
    return (
        <Typography align='center' gutterBottom={true} component={'h1'} variant={'h3'} color={'primary'}>
            {text}{children}
            <Divider/>
        </Typography>
    )
}

export default ProfileTitle