import {Router} from 'express';
import * as fs from 'fs';
import * as path from 'path';

const router = Router();

router.get('/', (req, res) => {
   res.send(fs.readFileSync(path.join(process.cwd(), 'src/views/index.html')).toString());
});

export default router;