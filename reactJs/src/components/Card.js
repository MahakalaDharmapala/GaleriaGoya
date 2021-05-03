import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300, //345,
      backgroundColor: grey[400],
    },
    media: {
      height: '420px', //0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: grey[900],
    },
    cambioFuente:{
      fontSize: '17px',
      textAlign: 'center' 
    }
  }));

export default function Capricho(props){

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} raised="true" >
      <CardHeader 
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        titleTypographyProps={{variant:'h4' }}
        title= {props.titulo} //"Shrimp and Chorizo Paella"
        subheaderTypographyProps={{variant: 'h5'}}
        subheader={props.fecha} //"September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={props.imagen} //{imagen}
        title= {props.titulo}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className= {classes.cambioFuente}>
            {props.cuerpoPrincipal}

            {/*This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.*/}
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className= {classes.cambioFuente} >Ficha: </Typography>
          <Typography paragraph className= {classes.cambioFuente}>
            {props.cuerpoSecundario}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}