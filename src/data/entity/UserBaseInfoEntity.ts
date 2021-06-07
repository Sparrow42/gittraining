import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// ① テーブル名定義
@Entity('user_base_info')
class UserBaseInfoEntity {
    // ② 属性定義
    @PrimaryColumn({
        type: 'varchar',
        name: 'user_id',
        length: 36
    })
    userId: string = '0';
    @Column({
        type: 'varchar',
        name: 'user_name',
        length: 30
    })
    // @ts-ignore
    userName: string;
    @Column({
        type: 'varchar',
        name: 'user_name_kana',
        length: 50
    })
    // @ts-ignore
    userNameKana: string;
    @Column({
        type: 'varchar',
        name: 'user_mail_address',
        nullable: true,
        length: 100
    })
    // @ts-ignore
    userMailAddress: string;
    @CreateDateColumn({
        type: 'timestamp',
        name: 'create_date'
    })
    // @ts-ignore
    createDate: Date;
    @Column({
        type: 'varchar',
        name: 'create_user_id',
        length: 100
    })
    // @ts-ignore
    createUserId: string;
    @UpdateDateColumn({
        type: 'timestamptz',
        name: 'update_date'
    })
    // @ts-ignore
    updateDate: Date;
    @Column({
        type: 'varchar',
        name: 'update_user_id',
        length: 100
    })
    // @ts-ignore
    updateUserId: string;
}

Object.seal(UserBaseInfoEntity);
export default UserBaseInfoEntity;
