import {Router} from 'express';
import EnderecoController from './app/controllers/EnderecoController';
import PatenteController from './app/controllers/PatenteController';
import JogadorController from './app/controllers/JogadorController';

const router = Router();

//http://localhost:3000/endereco/list
router.get('/endereco/list', EnderecoController.list);
router.post('/endereco/store', EnderecoController.store)
router.delete('/endereco/delete', EnderecoController.delete)



router.post('/loginjogador', JogadorController.login);
router.get('/jogador/:nickname', JogadorController.find);
router.get('/listjogador', JogadorController.list);
router.get('/deletejogador/:nickname', JogadorController.delete);
router.post('/updatejogador/', JogadorController.update);
router.post('/insertjogador/', JogadorController.store);

router.get('/listpatente', PatenteController.list);
router.get('/patente/:id', PatenteController.find);
router.get('/deletepatente/:id', PatenteController.delete);
router.post('/updatepatente/', PatenteController.update);
router.post('/insertpatente/', PatenteController.store);


export default router;