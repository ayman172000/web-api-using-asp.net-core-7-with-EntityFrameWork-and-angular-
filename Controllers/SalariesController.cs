using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using exam.Models;
using exam.Models.Request;

namespace exam.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalariesController : ControllerBase
    {
        private readonly DbSDContext _context;

        public SalariesController(DbSDContext context)
        {
            _context = context;
        }

        // GET: api/Salaries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Salarie>>> Getsalaries()
        {
          if (_context.salaries == null)
          {
              return NotFound();
          }
            var salaries=await _context.salaries.ToListAsync();
            salaries.ForEach(data =>
            {
                var departement = _context.departements.Find(data.DepartementId);
                data.Departement = departement;
            });
            return salaries;
        }

        // GET: api/Salaries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Salarie>> GetSalarie(long id)
        {
          if (_context.salaries == null)
          {
              return NotFound();
          }
            var salarie = await _context.salaries.FindAsync(id);

            if (salarie == null)
            {
                return NotFound();
            }

            return salarie;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutSalarie(long id, updateSalarieReq req)
        {
            if (id != req.Id)
            {
                return BadRequest();
            }
            var salarie = await _context.salaries.FindAsync(id);
            if (salarie == null)
                throw new Exception(" salarie not found");
            salarie.Salaire = req.Salaire;
            salarie.Age = req.Age;
            salarie.LastName = req.LastName;
            salarie.FirstName = req.FirstName;

            _context.Entry(salarie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalarieExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        [HttpPost]
        public async Task<ActionResult<Salarie>> PostSalarie(SalariesReq req)
        {
            var departement = await _context.departements.FindAsync(req.DepartementId);
            if (departement == null)
                throw new Exception("not fount departement");

            Salarie salarie = new Salarie();
            salarie.Departement = departement;
            salarie.Salaire = req.Salaire;
            salarie.LastName = req.LastName;
            salarie.FirstName = req.FirstName;
            salarie.Age = req.Age;
            _context.salaries.Add(salarie);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetSalarie), new { id = salarie.Id }, salarie);
        }

        // DELETE: api/Salaries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSalarie(long id)
        {
            if (_context.salaries == null)
            {
                return NotFound();
            }
            var salarie = await _context.salaries.FindAsync(id);
            if (salarie == null)
            {
                return NotFound();
            }

            _context.salaries.Remove(salarie);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("dep/{id}")]

        public async Task<ActionResult<IEnumerable<Salarie>>> GetsalariesByDep(long id)
        {
            var departement = await _context.departements.FindAsync(id);
            if (departement == null)
                throw new Exception("departement not found");
            var client=_context.salaries.Where(s => s.DepartementId == id).ToList();
            client.ForEach(c =>
            {
                c.Departement = departement;
            });
            return client.ToList();
        }

        private bool SalarieExists(long id)
        {
            return (_context.salaries?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
