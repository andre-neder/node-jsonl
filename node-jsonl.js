class JSONL{
    /* Creates JSONL String from array of objects */
    static stringify(array){
      return array.map(j => JSON.stringify(j)).join('\n');
    }
    /* Creates array of Objects from JSONL */
    static parse(jsonl){
      return jsonl.split('\n').filter(j => j != '').map(j => JSON.parse(j))
    }
}

export default JSONL;