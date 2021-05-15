/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-05-15 20:26:57
 * @modify date 2021-05-15 20:26:57
 */

export class Payload {
    public author: string;
    public content: string;
    public description: string;
    public publishedAt: string;
    public source: Source;
    public title: string;
    public url: string;
    public urlToImage: string;
}

class Source {
    public id: string;
    public name: string;
}