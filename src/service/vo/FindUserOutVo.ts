class FindUserOutVo {
    // ⑤ 読み取り専用のプロパティ定義
    // @ts-ignore
    readonly userId: string;
    // @ts-ignore
    readonly userName: string;
    // @ts-ignore
    readonly userNameKana: string;
    // @ts-ignore
    readonly userMailAddress: string;
}

Object.seal(FindUserOutVo);
export default FindUserOutVo;
