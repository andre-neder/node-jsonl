/*
  To learn more about jsonl visit: https://jsonlines.org
*/
class JSONL{
    /**
     * Create a jsonl formated string from an array of objects.
     * @param {Object[]} array - The array of objects.
     */
    static stringify(array){
      return array.map(j => JSON.stringify(j)).join('\n');
    }
    /**
     * Parse a jsonl formated string to an array of objects.
     * @param {string} jsonl - The string to parse.
     */
    static parse(jsonl){
      return jsonl.split('\n').filter(j => j != '').map(j => JSON.parse(j))
    }
}

export default JSONL;