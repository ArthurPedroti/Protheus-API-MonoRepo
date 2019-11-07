const sql = require("mssql");

module.exports = {
  async index(req, res) {
    const request = new sql.Request();

    const { filial, sc, produto } = req.headers;

    if(filial!=null) {
      filial_condition = `SC1.C1_FILIAL IN (${filial}) AND`;
    } else {filial_condition = ``;};

    if(sc!=null) {
      sc_condition = `SC1.C1_NUM = ('${sc}') AND`;
    } else {sc_condition = ``;};

    if(produto!=null) {
      produto_condition = `SC1.C1_PRODUTO IN ('${produto}') AND`;
    } else {produto_condition = ``;};
           
        // query to the database and get the records
        await request.query(
            `
            SELECT  SC1.C1_NUM AS SC,	
                    SC1.C1_ITEM AS ITEM,
                    RTRIM(SC1.C1_PRODUTO) AS PRODUTO,
                    RTRIM(SB1.B1_DESC) AS DESCRICAO,
                    SC1.C1_UM AS UM,
                    SC1.C1_QUANT AS QTD,
                    SC1.C1_QUJE AS QTD_ENT,
                    RTRIM(SC1.C1_OBS) AS OBS,
                    CONCAT(SUBSTRING(SC1.C1_DATPRF,7,2),'/',SUBSTRING(SC1.C1_DATPRF,5,2),'/',SUBSTRING(SC1.C1_DATPRF,1,4)) AS ENTREGA

            FROM	  SC1010 AS SC1 INNER JOIN
                    SB1010 AS SB1 ON SB1.D_E_L_E_T_ = '' AND SB1.B1_COD = SC1.C1_PRODUTO LEFT OUTER JOIN
                    SA2010 AS SA2 ON SA2.D_E_L_E_T_ = '' AND SA2.A2_COD = SC1.C1_FORNECE

            WHERE	  ${sc_condition}
                    ${filial_condition}
                    ${produto_condition}
                    SC1.C1_QUANT <> SC1.C1_QUJE AND
                    SC1.C1_RESIDUO = '' AND
                    SC1.D_E_L_E_T_ = ''

            ORDER BY SC1.C1_DATPRF, SC1.C1_NUM, SC1.C1_ITEM
            `, function (err, recordset) {
            
            if (err) console.log(err)

            return res.json(recordset.recordsets[0]);
            // send records as a response
            }
        )
  }
};