import {Entity, Column, PrimaryColumn, ManyToOne, ManyToMany, JoinColumn, JoinTable} from 'typeorm';

import Jogador from '../models/Jogador';

@Entity('tb_penalidade')
class Penalidade {

    @PrimaryColumn('int')
    codigo: number;

    @Column('text')
    descricao: string;

    @Column('int')
    qtd_pontos_perdidos: number;

    //coluna opcional
    @Column('date', {nullable: true})
    data: Date;
    
    //associação (flecha)
    @ManyToOne(type => Jogador, { nullable: false })
    @JoinColumn({name: "jogador_nickname", referencedColumnName: "nickname"})
    jogador: Jogador;   


}
export default Penalidade;