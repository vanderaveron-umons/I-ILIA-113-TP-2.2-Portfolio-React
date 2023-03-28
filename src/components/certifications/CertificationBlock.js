import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function CertificationBlock(props) {
   const {image, verification, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'Logo'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'certification'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={verification} title={'Lien de vérification'} icon={'fa fa-safari'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default CertificationBlock;