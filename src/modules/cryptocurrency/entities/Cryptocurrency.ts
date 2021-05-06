class Cryptocurrency {
  constructor(
    public coin: string,
    public nickname: string,
    public price: string,
    public has: string,
    public updated_at: Date
  ) {}
}

export { Cryptocurrency };
