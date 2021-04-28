export default interface UseCase<T , P>{
    execute(params : P) : Promise<T>
}