using meetly.Models;
using Microsoft.EntityFrameworkCore;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    DbSet<User> Users { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().HasKey(p => p.Id);
    }
}