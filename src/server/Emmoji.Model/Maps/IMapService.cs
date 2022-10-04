namespace Emmoji.Model.Maps;

public interface IMapService
{
    IList<Map> GetAllMaps();
}

public class MapService : IMapService
{
    public IList<Map> GetAllMaps()
    {
        throw new NotImplementedException();
    }
}