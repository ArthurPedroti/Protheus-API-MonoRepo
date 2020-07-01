const sql = require("mssql");

module.exports = {
  async index(req, res) {
    const request = new sql.Request();

    const { filial, op, produto } = req.headers;

    if(filial!=null) {
      filial_condition = `SD4.D4_FILIAL IN (${filial}) AND`;
    } else {filial_condition = ``;};

    if(op!=null) {
      op_condition = `SD4.D4_OP = ('${op}') AND`;
    } else {op_condition = ``;};

    if(produto!=null) {
      produto_condition = `SB1.B1_COD IN ('${produto}') AND`;
    } else {produto_condition = ``;};
           
    //CONCAT(SUBSTRING(SC2.C2_DATPRI,7,2),'/',SUBSTRING(SC2.C2_DATPRI,5,2),'/',SUBSTRING(SC2.C2_DATPRI,1,4)) AS ENTREGA

        // query to the database and get the records
        await request.query(
            `
            SELECT  
                    RTRIM(SB1.B1_COD) AS codigo,
                    RTRIM(SB1.B1_DESC) AS descricao,
                    SB1.B1_GRUPO AS grupo,
                    RTRIM(SBM.BM_DESC) AS desc_grupo

            FROM	  SB1010 AS SB1 INNER JOIN
                    SBM010 AS SBM ON SBM.D_E_L_E_T_ = '' AND SBM.BM_GRUPO = SB1.B1_GRUPO

            WHERE	  
                    SB1.D_E_L_E_T_ = ''

            `, function (err, recordset) {
            
            if (err) console.log(err)

            return res.json(recordset.recordsets[0]);
            // send records as a response
            }
        )
  }
};