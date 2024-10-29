import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1730133142949 implements MigrationInterface {
    name = 'InitialSchema1730133142949'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "zip" character varying NOT NULL, "street" character varying NOT NULL, "neighborhood" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "number" character varying NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."products_producttype_enum" AS ENUM('donation', 'sale')`);
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "productType" "public"."products_producttype_enum" NOT NULL, "price" integer, "contact" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "ownerId" uuid, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."members_membertype_enum" AS ENUM('donor', 'artisan', 'shop_owner')`);
        await queryRunner.query(`CREATE TABLE "members" ("memberId" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "fullName" character varying NOT NULL, "businessName" character varying, "phone" character varying, "socialMedia" text, "memberType" "public"."members_membertype_enum" NOT NULL, "addressId" uuid, CONSTRAINT "UQ_2714af51e3f7dd42cf66eeb08d6" UNIQUE ("email"), CONSTRAINT "REL_e887ecf131f2f0960155a1c142" UNIQUE ("addressId"), CONSTRAINT "PK_b8b1af4785a6d102a8704912178" PRIMARY KEY ("memberId"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_663aa9983fd61dfc310d407d4da" FOREIGN KEY ("ownerId") REFERENCES "members"("memberId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "members" ADD CONSTRAINT "FK_e887ecf131f2f0960155a1c142a" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "members" DROP CONSTRAINT "FK_e887ecf131f2f0960155a1c142a"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_663aa9983fd61dfc310d407d4da"`);
        await queryRunner.query(`DROP TABLE "members"`);
        await queryRunner.query(`DROP TYPE "public"."members_membertype_enum"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TYPE "public"."products_producttype_enum"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
