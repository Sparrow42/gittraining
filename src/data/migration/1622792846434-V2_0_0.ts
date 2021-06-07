import { MigrationInterface, QueryRunner } from 'typeorm';

export class V2001622792846434 implements MigrationInterface {
    name = 'V2001622792846434';

    public async up(queryRunner: QueryRunner): Promise<void> {
        // ① DDL (自動生成)
        await queryRunner.query(
            'CREATE TABLE "user_base_info" ("user_id" character varying(36) NOT NULL, "user_name" character varying(30) NOT NULL, "user_name_kana" character varying(50) NOT NULL, "user_mail_address" character varying(100), "create_date" TIMESTAMP NOT NULL DEFAULT now(), "create_user_id" character varying(100) NOT NULL, "update_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_user_id" character varying(100) NOT NULL, CONSTRAINT "PK_6d61bfa15b22ff555761ad61663" PRIMARY KEY ("user_id"))'
        );

        // ② DML (実装)
        await queryRunner.query(`INSERT INTO "user_base_info"(user_id,user_name,user_name_kana,user_mail_address,create_date,create_user_id,update_date,update_user_id) VALUES ('lakeel-ta','竜骨 太郎','りゅうこつ たろう','lakeel-ta@lakeel.com','2019/3/1 0:00','init-data','2019/3/1 0:00','init-data'),('lakeel-ha','竜骨 花子','りゅうこつ はなこ','lakeel-ha@lakeel.com','2019/3/1 0:00','init-data','2019/3/1 0:00','init-data')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "user_base_info"');
    }
}
