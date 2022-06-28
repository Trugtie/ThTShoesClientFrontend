import useScrollTrigger from '@mui/material/useScrollTrigger';

export default function BackToTop(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <div>Hello</div>
    </Slide>
  );
}
