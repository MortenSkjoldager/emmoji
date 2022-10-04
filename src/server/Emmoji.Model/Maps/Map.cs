namespace Emmoji.Model.Maps;

public class Map
{
    public int Height { get; set; }
    
    public int Width { get; set; }
    
    public IList<Layer> Layers { get; set; }

    private IList<Obstacle> _obstacles;

    private IList<SpawnPoint> _spawnPoints;

    public IList<SpawnPoint> GetSpawnPoints()
    {
        if (_spawnPoints != null)
        {
            return _spawnPoints;
        }
        
        var obstaclesLayer = Layers.FirstOrDefault(x => x.Name == "Spawnpoints");
        if (obstaclesLayer == null)
            throw new InvalidDataException("No Spawnpoints layer found");

        _spawnPoints = new List<SpawnPoint>();

        for (int x = 1; x <= obstaclesLayer.Width; x++)
        {
            for (int y = 1; y <= obstaclesLayer.Height; y++)
            {
                var positionY = (y * 300) - 300;
                var data = obstaclesLayer.Data[positionY + x - 1];
                if (data != "0")
                {
                    _spawnPoints.Add(new SpawnPoint()
                    {
                        X = x,
                        Y = y
                    });
                }
            }
        } 

        return _spawnPoints;
    }

    public IList<Obstacle> GetObstacles()
    {
        if (_obstacles != null)
        {
            return _obstacles;
        }
        
        var obstaclesLayer = Layers.FirstOrDefault(x => x.Name == "Obstacles");
        if (obstaclesLayer == null)
            throw new InvalidDataException("No obstacles layer found");
        
        _obstacles = new List<Obstacle>();

        for (int x = 1; x <= obstaclesLayer.Width; x++)
        {
            for (int y = 1; y <= obstaclesLayer.Height; y++)
            {
                var positionY = (y * 300) - 300;
                var data = obstaclesLayer.Data[positionY + x - 1];
                if (data != "0")
                {
                    _obstacles.Add(new Obstacle()
                    {
                        X = x,
                        Y = y
                    });
                }
            }
        } 

        return _obstacles;
    }
}

public class Layer
{
    public string Id { get; set; }
    public string Name { get; set; }
    public int Height { get; set; }
    public int Width { get; set; }
    public int X { get; set; }
    public int Y { get; set; }
    public bool Visible { get; set; }
    public string[] Data { get; set; }
    public string Type { get; set; }
    public string Opacity { get; set; }
}