import { Card, CardContent } from './ui/card';
import { Button } from '@mui/material';


export const TimerSetupForm = ({ onStart }: any) => {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent
        className="p-6"
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        <h3 className="text-xl font-bold mb-4">How to use?</h3>
        <ul className="list-disc pl-6 mb-4">
            <li>Ide jöhetene valami leírás.</li>
        </ul>
            <Button
            onClick={() => onStart()}
            variant="contained"
            color="success"
            fullWidth
            sx={{ p: 2 }}
            >
            Játék kezdése
            </Button>
      </CardContent>
    </Card>
  );
};
