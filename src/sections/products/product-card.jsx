import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

// import Label from 'src/components/label';
import ProductImage from '/public/assets/images/products/product_demo.jpg'
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
// import styles from './ProductStyle.module.scss'

// ----------------------------------------------------------------------

export default function ShopProductCard({ product }) {

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.cover ? product.cover : ProductImage}      
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderMediaType = (
    product.media_type === 'video' ? (
      <PlayCircleRoundedIcon />
    ) : (
      <PictureAsPdfRoundedIcon />
    )
  );




  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {/* {product.status && renderStatus} */}

        {renderImg}
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: '#56A2F9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}
        >
         {renderMediaType}
        </Box>
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {product.name}
        </Link>
      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
};
